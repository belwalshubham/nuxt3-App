import { defineConfig } from "cypress"

export default defineConfig({
  projectId: "x83arq", // TODO: hide this
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config)
      return config
    }
  }
})
