export class Project {
  goalMet: boolean = false;

  constructor(public name: string, public starters: string[], public description: string, public goal: number, public plans: string, public rewards: string[]){}
}
