import { TablerIcon } from "@tabler/icons-react";
import { LucideIcon } from "lucide-react";

export interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export interface VisibilityState {
    stats?: boolean;
    about?: boolean;
    contact?: boolean;
    [key: string]: boolean | undefined;
}
export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
  }

  export interface CourseContent {
    hero: {
        badge: string;
        title: string;
        subtitle: string;
        rating: number;
        reviewCount: string;
    };
    overview: string;
    stats: Array<{
        value: string;
        label: string;
        icon: LucideIcon |TablerIcon; // Replace `any` with the specific type for your icons if applicable
        color: string;
    }>;
    modules: Array<{
        title: string;
        duration: string;
        topics: string[];
    }>;
    benefits: Array<{
        title: string;
        items: string[];
        bgColor: string;
        icon: LucideIcon | TablerIcon; // Replace `any` with the specific type for your icons if applicable
    }>;
    highlights: Array<{
        icon: LucideIcon| TablerIcon; // Replace `any` with the specific type for your icons if applicable
        text: string;
    }>;
    cta: {
        title: string;
        subtitle: string;
    };
}
export interface CourseModule {
    title: string;
    duration: string;
    topics: string[];
}

export interface CourseBenefit {
    title: string;
    items: string[];
    bgColor: string;
    icon: LucideIcon |TablerIcon;
}

export interface HeroSectionProps {
    onEnrollClick: () => void;
    onDownloadBrochure: () => void;
}

export interface ModuleAccordionProps {
    module: CourseModule;
    index: number;
    isActive: boolean;
    onClick: () => void;
}

export interface BenefitsSectionProps {
    benefits: CourseBenefit[];
}
