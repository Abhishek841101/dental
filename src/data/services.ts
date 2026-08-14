export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  duration: string;
  startingPrice: string;
  icon: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "general-dentistry",
    name: "General Dentistry",
    shortDescription:
      "Complete dental checkups and preventive care for your everyday oral health.",
    description:
      "Our general dentistry services focus on maintaining your oral health through regular examinations, preventive care, professional cleaning and personalized treatment plans.",
    duration: "30–45 min",
    startingPrice: "₹500",
    icon: "Stethoscope",
    benefits: [
      "Comprehensive dental examination",
      "Preventive dental care",
      "Professional oral hygiene guidance",
      "Treatment planning",
    ],
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    shortDescription:
      "Professional whitening treatment for a brighter and more confident smile.",
    description:
      "Our professional teeth whitening treatment is designed to safely reduce stains and discoloration while helping you achieve a brighter smile.",
    duration: "45–60 min",
    startingPrice: "₹2,500",
    icon: "Sparkles",
    benefits: [
      "Professional whitening procedure",
      "Personalized treatment assessment",
      "Safe and controlled treatment",
      "Smile improvement guidance",
    ],
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    shortDescription:
      "Advanced treatment to preserve damaged or infected natural teeth.",
    description:
      "Root canal treatment removes infection from inside the tooth and helps preserve your natural tooth while reducing pain and preventing further complications.",
    duration: "60–90 min",
    startingPrice: "₹3,500",
    icon: "Syringe",
    benefits: [
      "Pain and infection management",
      "Natural tooth preservation",
      "Modern treatment techniques",
      "Personalized after-care guidance",
    ],
  },
  {
    slug: "braces-aligners",
    name: "Braces & Aligners",
    shortDescription:
      "Modern orthodontic solutions for straighter and healthier teeth.",
    description:
      "We provide modern orthodontic treatment options including traditional braces and clear aligners to improve tooth alignment, bite and smile aesthetics.",
    duration: "30–60 min",
    startingPrice: "₹25,000",
    icon: "Braces",
    benefits: [
      "Orthodontic consultation",
      "Treatment planning",
      "Braces and clear aligner options",
      "Regular progress monitoring",
    ],
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    shortDescription:
      "Natural-looking tooth replacement designed for long-term function.",
    description:
      "Dental implants provide a durable solution for replacing missing teeth and are designed to restore both function and the appearance of your smile.",
    duration: "60–120 min",
    startingPrice: "₹25,000",
    icon: "CircleDot",
    benefits: [
      "Implant consultation",
      "Personalized treatment planning",
      "Natural-looking restoration",
      "Long-term oral care guidance",
    ],
  },
  {
    slug: "kids-dentistry",
    name: "Kids Dentistry",
    shortDescription:
      "Gentle dental care designed to make children's visits comfortable.",
    description:
      "Our pediatric dental care focuses on prevention, healthy habits and comfortable dental experiences for children.",
    duration: "30–45 min",
    startingPrice: "₹500",
    icon: "Baby",
    benefits: [
      "Child-friendly dental examination",
      "Preventive care",
      "Oral hygiene education",
      "Comfort-focused treatment",
    ],
  },
];