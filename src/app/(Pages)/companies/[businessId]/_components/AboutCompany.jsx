import Image from "next/image";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { SocialCard } from "./SocialIcons";

export default function AboutSection({ business }) {
  return (
    <section
      id="overview"
      className="bg-[#8DD8FF] shadow-md rounded-xl p-6 border  border-blue-200 mb-6"
    >
      <div className="flex justify-between items-start gap-6">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-700">
            About {business.name}
          </h2>
          <h1 className="text-2xl font-bold text-blue-600">{business.name}</h1>
          <p className="font-semibold text-gray-700">
            Share Price: ₹{business.sharePrice}
          </p>

          {/* Buy/Sell Buttons */}
          <div className="flex gap-2 mt-2">
            <button className="btn btn-success btn-sm">Buy</button>
            <button className="btn btn-error btn-sm">Sell</button>
          </div>

          {/* Description */}
          <p className="mt-4 font-alice text-gray-800 leading-relaxed">
            {business.description}
          </p>

          {/* Contact Info */}
          <div className="mt-4 space-y-2 text-sm text-gray-800">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-800" />
              <span>{business.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-800" />
              <span>{business.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-gray-800" />
              <a
                href={business.website}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                {business.website}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-800" />
              <span>
                {business.streetLine1}, {business.city}, {business.state},{" "}
                {business.country}
              </span>
            </div>
          </div>
        </div>

        {/* Right Section (Logo) */}
        <div className="flex-shrink-0">
          {business.logoUrl ? (
            <Image
              src={business.logoUrl}
              alt={business.name}
              width={100}
              height={100}
              className="rounded-lg border object-cover"
            />
          ) : (
            <div className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-lg text-xl font-bold">
              {business.name.charAt(0)}
            </div>
          )}
        </div>
      </div>
       {/* Social Icons (bottom-right inside card) */}
     
    </section>
  );
}


//for social icon


