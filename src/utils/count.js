export default async function count(code) {
    const rep = code
    // 全部代码行数
    const lines = rep.split("\n");
    // 注释
    const commentNum = lines.filter((line) =>
        new RegExp("^(//|/\\*|\\*|\\*/)", "g").test(line.trimStart())
    ).length;
}