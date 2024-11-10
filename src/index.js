import "colors";
import { mongoose } from "mongoose";
import { exec } from "child_process";
import * as fs from "fs";
const packageName = "mongoose"; // replace with any package you want to check

const checkPackageInstalled = () => {
  try{
     // Read and parse the package.json file
  const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));

  // Check in dependencies and devDependencies
  const isInstalled =
    (packageJson.dependencies && packageJson.dependencies[packageName]) ||
    (packageJson.devDependencies && packageJson.devDependencies[packageName]);

  if (!isInstalled) {
    exec("npm show mongoose version", (error, stdout, stderr) => {
      const latestVersion = stdout.trim();
      exec("npm list mongoose --depth=0", (error, stdout, stderr) => {
        if (error || !stdout.includes(latestVersion)) {
          console.log(
            `Installing latest mongoose version (${latestVersion})...`
          );
          exec("npm install mongoose@latest", (error, stdout, stderr) => {
            if (error) {
              console.error(
                `Error installing latest mongoose: ${error.message}`
              );
              return;
            }
            console.log(`Mongoose updated to latest version: ${latestVersion}`);
            return
          });
        } else {
          console.log("Mongoose is already up to date.");
          return
        }
      });
    });
  }
  }
  catch(error){
    console.log(error)
  }
};

export async function MongooseConnection(url, database_name) {
  try {
    checkPackageInstalled()
    const conn = await mongoose.connect(url + "/" + database_name);
    if (conn) {
      console.log(
        ("mongoose connection successfully" + "\n" + conn.connection.host)
          .bgGreen
      );
    }
  } catch (error) {
    console.log(("error" + " " + error).bgRed);
  }
}
