import fs from "fs";

// Function to generate a file
const generateFile = (fileName, content) => {
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.error("Error generating file:", err);
    } else {
      console.log("File generated successfully!");
    }
  });
};

// Usage example
const fileName = "example.txt";
const fileContent = "This is the content of the file.";

generateFile(fileName, fileContent);
