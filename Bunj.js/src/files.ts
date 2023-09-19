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

//open writer
const file2 = Bun.file(txt);
const writer = file2.writer();
//write some stuff
writer.write("Something\n");
//do some stuff
console.log("writing");
// write more stuff
writer.write("Something more\n");
console.log("writing more");
console.log("writing more...");
//flush write
writer.flush();
//close
writer.end();

Bun.write(Bun.stdout, "Some content stdout");
