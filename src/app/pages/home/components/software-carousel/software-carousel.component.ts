import {Component} from '@angular/core';
import {ImageItem} from '../../../../shared/models/image-item';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-software-carousel',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './software-carousel.component.html',
  styleUrl: './software-carousel.component.css',
})
export class SoftwareCarouselComponent {
  protected readonly icons: ImageItem[] = [
    {image: 'icons/software/python.png', alt: 'python'},
    {image: 'icons/software/java.png', alt: 'java'},
    {image: 'icons/software/c-sharp.png', alt: 'cSharp'},
    {image: 'icons/software/javascript.png', alt: 'javascript'},
    {image: 'icons/software/typescript.png', alt: 'typescript'},
    {image: 'icons/software/bash.png', alt: 'bash'},
    {image: 'icons/software/mysql.png', alt: 'mysql'},
    {image: 'icons/software/redis.png', alt: 'redis'},
    {image: 'icons/software/sqlite.png', alt: 'sqlite'},
    {image: 'icons/software/angular.png', alt: 'angular'},
    {image: 'icons/software/docker.png', alt: 'docker'},
    {image: 'icons/software/podman.png', alt: 'podman'},
    {image: 'icons/software/ansible.png', alt: 'ansible'},
    {image: 'icons/software/git.png', alt: 'git'},
  ];
}
