'use client';

import { useEffect, useState } from 'react';
import { FaCheckCircle, FaEnvelope, FaTimes } from 'react-icons/fa';

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  // Close modal with ESC
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        setShowSuccess(false);
      }
    };

    window.addEventListener('keydown', handler);

    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Auto close success modal after 6 seconds
  useEffect(() => {
    if (!showSuccess) return;

    const timer = setTimeout(() => {
      setShowSuccess(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, [showSuccess]);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (loading) return;

    setError('');

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append('entry.1343205363', trimmedEmail);

      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSep7TPkje4UnwKTqDHyRPSfjHvzdynBOGMYhvLQSNxaJjbYjw/formResponse',
        {
          method: 'POST',
          mode: 'no-cors',
          body: formData,
        }
      );

      setEmail('');
      setShowSuccess(true);
    } catch (err) {
      console.error(err);
      setError(
        'Unable to subscribe at the moment. Please try again in a few minutes.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubscribe} noValidate>
        <div className="relative">
          <input
            type="email"
            autoComplete="email"
            disabled={loading}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError('');
            }}
            className={`w-full rounded-lg py-2.5 px-3 text-sm outline-none transition-all placeholder:text-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed ${
              error
                ? 'border border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100'
                : 'border border-slate-200 text-gray-700 focus:border-[#0B2A6B] focus:ring-1 focus:ring-[#0B2A6B]/20'
            }`}
          />

          <FaEnvelope
            size={15}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        </div>

        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-3 w-full rounded-lg py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-200 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ background: '#FE5101' }}
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>

        <p className="mt-2 text-center text-[11px] text-gray-400">
          🔒 No spam. Unsubscribe anytime.
        </p>
      </form>

      {/* Success Modal */}
      {showSuccess && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowSuccess(false)}
          />

          {/* Modal */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="newsletter-success-title"
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          >
            <div
              className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                aria-label="Close"
                className="absolute right-4 top-4 rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
              >
                <FaTimes size={16} />
              </button>

              <div className="px-8 py-10 text-center">
                <div
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full"
                  style={{ background: '#E8FFF2' }}
                >
                  <FaCheckCircle
                    size={42}
                    className="text-green-500"
                  />
                </div>

                <h3
                  id="newsletter-success-title"
                  className="mb-3 text-2xl font-bold text-gray-900"
                >
                  You're Subscribed!
                </h3>

                <p className="mb-8 leading-relaxed text-gray-500">
                  Thank you for subscribing to our newsletter.
                  <br />
                  You'll now receive the latest logistics insights,
                  DDP shipping updates, import/export guides,
                  and global trade best practices directly in your inbox.
                </p>

                <button
                  type="button"
                  onClick={() => setShowSuccess(false)}
                  className="w-full rounded-lg py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  style={{ background: '#FE5101' }}
                >
                  Continue Reading
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}