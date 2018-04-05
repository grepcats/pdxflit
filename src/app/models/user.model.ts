export class User {
  rewardsEarned: string[];
  volunteerOps: string[];
  projectsSupported: string[];

  constructor(
    public name: string,
    public uid: string
  ){}


}
