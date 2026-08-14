export type Doctor = {
  id: string;
  slug: string;
  name: string;
  specialty: string;
  experience: string;
  qualification: string;
  availableDays: string[];
  avatar: string;
};

export const doctors: Doctor[] = [
  {
    id: "doctor-1",
    slug: "dr-sarah-sharma",
    name: "Dr. Sarah Sharma",
    specialty: "Senior Dental Surgeon",
    experience: "15+ Years Experience",
    qualification: "BDS, MDS",
    availableDays: ["Monday", "Tuesday", "Thursday", "Friday"],
    avatar: "DS",
  },
  {
    id: "doctor-2",
    slug: "dr-amit-rao",
    name: "Dr. Amit Rao",
    specialty: "Cosmetic & Implant Dentist",
    experience: "12+ Years Experience",
    qualification: "BDS, MDS",
    availableDays: ["Monday", "Wednesday", "Friday", "Saturday"],
    avatar: "AR",
  },
  {
    id: "doctor-3",
    slug: "dr-priya-mehta",
    name: "Dr. Priya Mehta",
    specialty: "Orthodontist",
    experience: "10+ Years Experience",
    qualification: "BDS, MDS Orthodontics",
    availableDays: ["Tuesday", "Wednesday", "Thursday", "Saturday"],
    avatar: "PM",
  },
];