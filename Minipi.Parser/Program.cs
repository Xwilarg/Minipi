using System.Text.Json;

var inputPath = "D:\\Projects\\Katsis\\StellaNotes\\Ebereus\\Characters\\MiniPi\\MiniPi.md";

var data = File.ReadAllText(inputPath).Replace("\r", "");
var minis = data.Split("\n## ").Skip(1);

List<MinipiInfo> info = new();
foreach (var d in minis.Reverse())
{
    var split = d.Split("###");
    var writtenBy = split[0].Split('\n')[1];
    MinipiInfo outInfo = new()
    {
        ID = int.Parse(split[0].Split(' ', '\n')[0]),
        WrittenBy = string.IsNullOrWhiteSpace(writtenBy) ? null : writtenBy.Trim(),
        Likes = string.Join("\n", split[1].Split('\n').Skip(1)),
        Behaviors = string.Join("\n", split[2].Split('\n').Skip(1))
    };
    if (outInfo.Likes == null || outInfo.Behaviors == null) throw new NullReferenceException($"Missing data for {outInfo.ID}");
    info.Add(outInfo);
}

File.WriteAllText("output.json", JsonSerializer.Serialize(info, new JsonSerializerOptions()
{
    PropertyNamingPolicy = JsonNamingPolicy.CamelCase
}));

class MinipiInfo
{
    public int ID { set; get; }
    public string WrittenBy { set; get; }
    public string Likes { set; get; }
    public string Behaviors { set; get; }
}