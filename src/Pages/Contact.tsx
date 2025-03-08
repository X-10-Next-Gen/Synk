import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full bg-gray-900 rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-6">Contact Us</h2>

        {/* Contact Information */}
        <div className="text-center mb-10">
          <p className="text-gray-300">
            Have questions? We’re here to help. Reach out to us anytime!
          </p>
        </div>

        {/* Contact Details */}
        <div className="grid md:grid-cols-2 gap-6 text-center mb-10">
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-blue-400 text-3xl mb-2" />
            <p className="text-gray-300">Email</p>
            <a href="mailto:support@aimarketplace.com" className="text-blue-400 hover:underline">
              support@aimarketplace.com
            </a>
          </div>
          <div className="flex flex-col items-center">
            <FaPhone className="text-blue-400 text-3xl mb-2" />
            <p className="text-gray-300">Phone</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-blue-400 text-3xl mb-2" />
            <p className="text-gray-300">Location</p>
            <p className="text-gray-400">New York, USA</p>
          </div>
          <div className="flex flex-col items-center">
            <FaClock className="text-blue-400 text-3xl mb-2" />
            <p className="text-gray-300">Business Hours</p>
            <p className="text-gray-400">Mon - Fri: 9 AM - 6 PM (EST)</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="mt-6 space-y-6">
          <div>
            <label className="block text-gray-300 mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Message</label>
            <textarea
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg h-28 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
            Send Message
          </button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl w-full bg-gray-900 rounded-lg shadow-lg p-8 mt-8">
        <h3 className="text-3xl font-bold text-center text-blue-400 mb-6">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <details className="bg-gray-800 p-4 rounded-lg cursor-pointer">
            <summary className="text-lg font-semibold text-blue-400">How long does it take to get a response?</summary>
            <p className="text-gray-300 mt-2">
              We typically respond within 24-48 hours on business days.
            </p>
          </details>
          <details className="bg-gray-800 p-4 rounded-lg cursor-pointer">
            <summary className="text-lg font-semibold text-blue-400">Do you offer customer support on weekends?</summary>
            <p className="text-gray-300 mt-2">
              Our support team is available Monday to Friday from 9 AM - 6 PM (EST). We try to respond on weekends if possible.
            </p>
          </details>
          <details className="bg-gray-800 p-4 rounded-lg cursor-pointer">
            <summary className="text-lg font-semibold text-blue-400">Where is your office located?</summary>
            <p className="text-gray-300 mt-2">
              Our main office is located in New York, USA, but we operate globally.
            </p>
          </details>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="max-w-4xl w-full mt-8">
        <h3 className="text-3xl font-bold text-center text-blue-400 mb-6">Our Location</h3>
        <div className="rounded-lg overflow-hidden">
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24160.286907690386!2d-74.0059729!3d40.7127754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18a3a67b%3A0xc80b8f06e177fe62!2sNew+York%2C+USA!5e0!3m2!1sen!2sus!4v1648467857925!5m2!1sen!2sus"
            // allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
