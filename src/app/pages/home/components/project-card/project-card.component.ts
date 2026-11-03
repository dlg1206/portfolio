import {Component, computed, input, signal} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {KeywordChipComponent} from '../../../../shared/components/keyword-chip/keyword-chip.component';
import {SimpleButtonComponent} from '../../../../shared/components/simple-button/simple-button.component';
import {GitHubProject} from '../../../../shared/models/github-project';

@Component({
  selector: 'app-project-card',
  imports: [
    NgOptimizedImage,
    KeywordChipComponent,
    SimpleButtonComponent
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  project = input.required<GitHubProject>();
  href = input.required<string>();
  version = input('1'); // bump to bust cache

  protected failed = signal(false);

  // fetch the preview from github
  protected src = computed(() => {
    const {owner, repo} = this.project();
    return `https://opengraph.githubassets.com/${this.version()}/${owner}/${repo}`;
  });

  protected alt = computed(() => `${this.project().repo} banner`);

  // sort keywords by length
  protected sortedKeywords = computed(() =>
    [...this.project().keywords].sort((a, b) => a.length - b.length || a.localeCompare(b))
  );
}


