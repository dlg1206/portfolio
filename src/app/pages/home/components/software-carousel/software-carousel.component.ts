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
    {src: 'icons/software/python.png', alt: 'python'},
    {src: 'icons/software/java.png', alt: 'java'},
    {src: 'icons/software/c-sharp.png', alt: 'cSharp'},
    {src: 'icons/software/javascript.png', alt: 'javascript'},
    {src: 'icons/software/typescript.png', alt: 'typescript'},
    {src: 'icons/software/bash.png', alt: 'bash'},
    {src: 'icons/software/mysql.png', alt: 'mysql'},
    {src: 'icons/software/redis.png', alt: 'redis'},
    {src: 'icons/software/sqlite.png', alt: 'sqlite'},
    {src: 'icons/software/angular.png', alt: 'angular'},
    {src: 'icons/software/docker.png', alt: 'docker'},
    {src: 'icons/software/podman.png', alt: 'podman'},
    {src: 'icons/software/ansible.png', alt: 'ansible'},
    {src: 'icons/software/git.png', alt: 'git'},
  ];
}
