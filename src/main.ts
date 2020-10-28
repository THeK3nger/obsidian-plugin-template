import { Plugin } from "obsidian";

export default class ReadingTime extends Plugin {
  onInit() {}

  async onload() {
    console.log("Plugin is Loading...");
  }

  onunload() {
    console.log("Plugin is Unloading...");
  }
}
