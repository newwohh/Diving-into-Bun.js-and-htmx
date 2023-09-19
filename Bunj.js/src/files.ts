// read a file

const file = Bun.file("package.json");
const contents = await file.json();
console.log(contents);

if (contents.scripts) {
  contents.scripts.start = "bun run src/files.ts";
}

Bun.write("package.json", JSON.stringify(contents, null, 2));

const { file: theFile, path, dir, main, url } = import.meta;

console.log({
  theFile,
  path,
  dir,
  main,
  url,
});

const txt = `${import.meta.dir}/test`;
console.log(txt);
