import { Injectable } from '@angular/core';
import { Project } from './models/project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectsService {
  projects: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
 }

  getProjects(){
    return this.projects;
  }
  getProjectById(projectId: string){
    return this.database.object('projects/' + projectId);
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }

  updateRaisedAmount(project, amount: number) {
    let projectEntryInDatabase = this.getProjectById(project.$key);
    let newAmount = project.raised += amount;
    projectEntryInDatabase.update({raised: newAmount});

  }
  updateVolunteers(project){
    let projectEntryInDatabase = this.getProjectById(project.$key);
    let newVolunteers = project.volunteers += 1;
    projectEntryInDatabase.update({volunteers: newVolunteers});
  }

  updateProject(localUpdatedProject) {
    let projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    projectEntryInFirebase.update({name: localUpdatedProject.name,
                                  description: localUpdatedProject.description,
                                  starters: localUpdatedProject.starters,
                                  goal: localUpdatedProject.goal,
                                  plans: localUpdatedProject.plans,
                                  rewards: localUpdatedProject.rewards,
                                })
  }

  deleteProject(localProjectToDelete) {
    let projectEntryInFirebase = this.getProjectById(localProjectToDelete.$key);
    projectEntryInFirebase.remove();
  }
}
