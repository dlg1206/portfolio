/**
 * Github project details
 *
 * - `owner`: Owner of repo
 * - `repo`: Name of repo
 * - `keywords`: List of keywords for the project
 * - `abstract`: Abstract for the project
 */
export interface GitHubProject {
  owner: string;
  repo: string;
  keywords: string[];
  abstract: string;
}
