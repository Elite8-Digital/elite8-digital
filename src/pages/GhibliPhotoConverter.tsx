import React, { useState, useRef } from 'react';
import { Camera, Upload, Sparkles, RotateCcw, Loader2 } from 'lucide-react';
import MainLayout from '@/layouts/MainLayout';

interface ImageData {
	url: string;
	blob: Blob;
}

const GhibliPhotoConverter: React.FC = () => {
	const [image, setImage] = useState<ImageData | null>(null);
	const [email, setEmail] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [submitted, setSubmitted] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');
	const [useCamera, setUseCamera] = useState<boolean>(false);
	const [submissionData, setSubmissionData] = useState<{ id: string; imageUrl: string } | null>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [stream, setStream] = useState<MediaStream | null>(null);

	// Backend API URL - Update this to your actual backend URL
	const API_URL = 'https://shaadi-backend-hv12.onrender.com/api/submissions';

	// const startCamera = async (): Promise<void> => {
	// 	try {
	// 		const mediaStream = await navigator.mediaDevices.getUserMedia({
	// 			video: { facingMode: 'user' },
	// 			audio: false,
	// 		});

	// 		const video = videoRef.current;
	// 		if (video) {
	// 			video.srcObject = mediaStream;

	// 			video.onloadedmetadata = () => {
	// 				video.play().catch(() => {});
	// 			};
	// 		}

	// 		setStream(mediaStream);
	// 		setUseCamera(true);
	// 		setError('');
	// 	} catch (err) {
	// 		setError('Unable to access camera. Please check permissions.');
	// 	}
	// };

	const stopCamera = (): void => {
		if (stream) {
			stream.getTracks().forEach((track) => track.stop());
			setStream(null);
		}
		setUseCamera(false);
	};

	const capturePhoto = (): void => {
		const canvas = canvasRef.current;
		const video = videoRef.current;

		if (!canvas || !video) return;

		const tryCapture = (): void => {
			if (video.videoWidth > 0 && video.videoHeight > 0) {
				canvas.width = video.videoWidth;
				canvas.height = video.videoHeight;

				const ctx = canvas.getContext('2d');
				if (ctx) {
					ctx.drawImage(video, 0, 0);

					canvas.toBlob((blob) => {
						if (blob) {
							const url = URL.createObjectURL(blob);
							setImage({ url, blob });
							stopCamera();
						}
					}, 'image/jpeg');
				}

				return;
			}

			setTimeout(tryCapture, 100);
		};

		tryCapture();
	};

	const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const file = e.target.files?.[0];
		if (file) {
			const url = URL.createObjectURL(file);
			setImage({ url, blob: file });
			setError('');
		}
	};

	const handleSubmit = async (): Promise<void> => {
		if (!image) {
			setError('Please capture or upload a photo');
			return;
		}

		if (!email || !phone) {
			setError('Please enter your email and phone number');
			return;
		}

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setError('Please enter a valid email address');
			return;
		}

		// Phone validation
		const digitsOnly = phone.replace(/\D/g, '');

		if (!/^[+\d\s\-()]+$/.test(phone) || digitsOnly.length < 10 || digitsOnly.length > 15) {
			setError('Please enter a valid phone number');
			return;
		}

		setError('');
		setLoading(true);

		try {
			// Create FormData to send to backend
			const formData = new FormData();
			formData.append('email', email);
			formData.append('phone', phone);
			formData.append('photo', image.blob, 'photo.jpg');

			// Send to backend
			const response = await fetch(`${API_URL}/upload`, {
				method: 'POST',
				body: formData,
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || 'Failed to submit photo');
			}

			// Success
			setSubmissionData({
				id: data.id,
				imageUrl: data.imageUrl,
			});
			setSubmitted(true);
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Failed to submit photo. Please try again.');
		} finally {
			setLoading(false);
		}
	};

	const reset = (): void => {
		setImage(null);
		setEmail('');
		setPhone('');
		setSubmitted(false);
		setSubmissionData(null);
		setError('');
		stopCamera();
	};

	return (
		<MainLayout>
			<div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 p-4 md:p-8">
				<div className="max-w-4xl mx-auto">
					{/* Header */}
					<div className="text-center mb-8">
						<div className="flex justify-center items-center gap-3 mb-4">
							<Sparkles className="w-8 h-8 text-purple-500" />
							<h1 className="text-4xl md:text-5xl font-bold text-gray-800">Ghibli Photo Magic</h1>
							<Sparkles className="w-8 h-8 text-purple-500" />
						</div>
						<p className="text-gray-600 text-lg">
							Share your photo and we'll send you a Studio Ghibli style version
						</p>
					</div>

					{/* Main Content */}
					<div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
						{!image && !useCamera && (
							<div className="space-y-6">
								<div className="text-center py-8">
									{/* <p className="text-gray-600 mb-6">Choose how to capture your photo</p> */}

									<div className="grid md:grid-cols-1 gap-4 max-w-2xl mx-auto">
										{/* <button
											onClick={startCamera}
											className="flex flex-col items-center gap-3 p-8 border-2 border-purple-300 rounded-2xl hover:bg-purple-50 hover:border-purple-500 transition-all"
										>
											<Camera className="w-12 h-12 text-purple-500" />
											<span className="text-lg font-semibold text-gray-700">Use Camera</span>
											<span className="text-sm text-gray-500">Take a photo now</span>
										</button> */}

										<button
											onClick={() => fileInputRef.current?.click()}
											className="flex flex-col items-center gap-3 p-8 border-2 border-blue-300 rounded-2xl hover:bg-blue-50 hover:border-blue-500 transition-all"
										>
											<Upload className="w-12 h-12 text-blue-500" />
											<span className="text-lg font-semibold text-gray-700">Upload Photo</span>
											<span className="text-sm text-gray-500">Choose from gallery</span>
										</button>
									</div>

									<input
										ref={fileInputRef}
										type="file"
										accept="image/*"
										onChange={handleFileUpload}
										className="hidden"
									/>
								</div>
							</div>
						)}

						{useCamera && !image && (
							<div className="space-y-4">
								<div className="relative rounded-2xl overflow-hidden aspect-video">
									<video
										ref={videoRef}
										autoPlay={true}
										playsInline={true}
										muted={true}
										className="w-full h-full object-cover"
									/>
								</div>

								<div className="flex gap-3 justify-center">
									<button
										onClick={capturePhoto}
										className="flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-all font-semibold"
									>
										<Camera className="w-5 h-5" />
										Capture Photo
									</button>

									<button
										onClick={stopCamera}
										className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-all font-semibold"
									>
										Cancel
									</button>
								</div>
							</div>
						)}

						{image && !submitted && (
							<div className="space-y-6">
								<div className="relative rounded-2xl overflow-hidden">
									<img src={image.url} alt="Captured" className="w-full" />
								</div>

								<div className="space-y-4">
									<div>
										<label className="block text-sm font-semibold text-gray-700 mb-2">
											Email Address *
										</label>
										<input
											type="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											placeholder="your@email.com"
											disabled={loading}
											className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed text-black"
										/>
									</div>

									<div>
										<label className="block text-sm font-semibold text-gray-700 mb-2">
											Phone Number *
										</label>
										<input
											type="tel"
											value={phone}
											onChange={(e) => setPhone(e.target.value)}
											placeholder="+1 (555) 123-4567"
											disabled={loading}
											className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed text-black"
										/>
									</div>

									<p className="text-sm text-gray-500 text-center">
										We'll send your Ghibli-style photo to the email and phone number you provide
									</p>

									<div className="flex gap-3 justify-center flex-wrap">
										<button
											onClick={handleSubmit}
											disabled={loading}
											className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
										>
											{loading ? (
												<>
													<Loader2 className="w-5 h-5 animate-spin" />
													Submitting...
												</>
											) : (
												<>
													<Sparkles className="w-5 h-5" />
													Submit Photo
												</>
											)}
										</button>

										<button
											onClick={reset}
											disabled={loading}
											className="flex items-center gap-2 px-6 py-4 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
										>
											<RotateCcw className="w-5 h-5" />
											Start Over
										</button>
									</div>
								</div>
							</div>
						)}

						{submitted && submissionData && (
							<div className="space-y-6 text-center py-8">
								<div className="flex justify-center mb-4">
									<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
										<Sparkles className="w-10 h-10 text-green-500" />
									</div>
								</div>

								<h2 className="text-3xl font-bold text-gray-800">Thank You! 🎨</h2>

								<div className="max-w-md mx-auto space-y-3 text-gray-600">
									<p className="text-lg">Your photo has been submitted successfully!</p>
									<p>We'll convert it into a beautiful Studio Ghibli style artwork and send it to:</p>
									<div className="bg-purple-50 rounded-xl p-4 space-y-2">
										<p className="font-semibold text-purple-700">📧 {email}</p>
										<p className="font-semibold text-purple-700">📱 {phone}</p>
									</div>
									<p className="text-sm">
										You should receive your Ghibli-style photo within 24 hours.
									</p>
									<p className="text-xs text-gray-400 mt-4">Submission ID: {submissionData.id}</p>
								</div>

								<button
									onClick={reset}
									className="flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-all font-semibold mx-auto"
								>
									<RotateCcw className="w-5 h-5" />
									Submit Another Photo
								</button>
							</div>
						)}

						{error && (
							<div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center">
								{error}
							</div>
						)}
					</div>

					<canvas ref={canvasRef} className="hidden" />

					{/* Footer Note */}
					<div className="mt-6 text-center text-sm text-gray-500">
						<p>✨ Your privacy matters - we'll only use your contact info to deliver your Ghibli photo</p>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default GhibliPhotoConverter;
