import path from "path";
import matter from "gray-matter";
import fs from "fs";
import remark from "remark";
import html from "remark-html";
import gfm from "remark-gfm";
import highlight from "remark-highlight.js";
import slug from "remark-slug";

const postsDirectory = path.join(process.cwd(), "src/instructions");

export const getPlatformNames = (dir: "server" | "client") => {
  const fileNames = fs.readdirSync(`${postsDirectory}/${dir}`);

  return fileNames.map((fileName) => {
    return {
      params: {
        platform: fileName.replace(/\.md$/, ""),
      },
    };
  });
};

export const getInstallInstructions = async (
  platform: string,
  dir: "server" | "client"
) => {
  const fullPath = path.join(`${postsDirectory}/${dir}`, `${platform}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(gfm)
    .use(highlight)
    .use(slug)
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    platform,
    contentHtml,
    ...matterResult.data,
  };
};
