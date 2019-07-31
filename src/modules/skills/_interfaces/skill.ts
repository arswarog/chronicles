export interface ISkill {
    id: string;
    skillBase: string;
    type: number;
    status: number;
    repeat: boolean;
    count: number;
    title: string;
    more: string;
    endTime: number;
}

export interface ISkillFull extends ISkill {
    castData: string;
    effectData: string;
    otkatData: string;
}
