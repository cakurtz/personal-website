export interface AboutMeDetailModel {
    title: string;
    entries: ExperienceModel[] | EducationModel[] | VolunteerModel[];
}

export interface ExperienceModel {
    name: string;
    location: string;
    titles: ExperienceTitleModel[];
    startDate: string;
    endDate: string;
    projects: ProjectModel[];
}

export interface ExperienceTitleModel {
    title: string;
    startDate: string;
    endDate: string;
}

export interface ProjectModel {
    name: string;
    techStack: string[];
    startDate: string;
    endDate: string;
    description: string;
}

export interface EducationModel {
    name: string;
    startDate: string;
    endDate: string;
    degreeEarned?: string;
    major: string;
}

export interface VolunteerModel {
    name: string;
    title: string;
    startDate: string;
    endDate: string;
    description: string;
}