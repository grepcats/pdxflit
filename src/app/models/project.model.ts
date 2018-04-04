export class Project {
  goalMet: boolean = false;
  raised: number = 0;

  constructor(public name: string, public starters: string[], public description: string, public goal: number, public plans: string, public rewards: string[]){}
}
