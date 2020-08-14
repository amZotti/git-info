import React from "react";

const baseGithubUrl = "https://github.com";
export const getGithubLink = (slug, innerText) => <a href={baseGithubUrl + slug} target="_blank" rel="noopener noreferrer">{innerText}</a>;