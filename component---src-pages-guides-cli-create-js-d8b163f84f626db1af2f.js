(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{hOb7:function(e,a,t){"use strict";t.r(a);var n=t("zBv9"),l=t("Wbzz"),s=t("q1tI"),r=t.n(s),o=t("TJpk"),i=t("rCNW"),c=t("KwlC"),m=t("w+gZ"),u="Creating schemas from .NET types";a.default=function(){var e=n.data.site.siteMetadata,a=e.latestRelease,t=e.projectName;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.Helmet,null,r.a.createElement("title",null,u)),r.a.createElement("h1",null,u),r.a.createElement("p",null,"Creating schemas from complex .NET types is a time-saving way to get started with Avro. ",t," recognizes most commonly used types and supports classes, structs, and enums, so it’s usually possible to get a working schema with no additional manipulation."),r.a.createElement("p",null,"For detailed information about how types are matched to schemas, see the ",r.a.createElement(l.a,{to:"/internals/mapping"},"types and conversions")," documentation."),r.a.createElement("h2",null,"Getting started"),r.a.createElement("p",null,"If you haven’t already, install the ",t," CLI:"),r.a.createElement(i.a,{language:"bash"},"$ dotnet tool install Chr.Avro.Cli --global\n  Tool 'chr.avro.cli' (version '"+a+"') was successfully installed."),r.a.createElement("p",null,"After the CLI tool has been installed, you can invoke it using ",r.a.createElement("code",null,"dotnet avro"),". If the install command fails, make sure you have the latest version of the ",r.a.createElement(m.a,{to:"https://dotnet.microsoft.com/download"},".NET Core SDK")," installed."),r.a.createElement("h2",null,"Using the CLI"),r.a.createElement("p",null,"To create a schema for a type, use the ",r.a.createElement(l.a,{to:"/cli#create"},r.a.createElement(i.a,{inline:!0,language:"bash"},"create"))," command. You’ll need to provide the type’s full name as well as the path to a compiled assembly that contains it:"),r.a.createElement(i.a,{language:"bash"},'$ dotnet avro create --type ExampleNamespace.ExampleLibrary.ExampleClass --assembly bin/Debug/netstandard2.0/ExampleNamespace.ExampleLibrary.dll\n{"name":"ExampleNamespace.ExampleLibrary.ExampleClass","type":"record","fields":[{"name":"ExampleProperty","type":"int"}]}'),r.a.createElement("h2",null,"Customizing generated schemas"),r.a.createElement("p",null,"The CLI ships with some convenience options:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",null,"The ",r.a.createElement("strong",null,r.a.createElement("code",null,"--nullable-references"))," option causes all reference types to be written as nullable unions. This is useful when you prefer to keep .NET’s nullable semantics.")),r.a.createElement("li",null,r.a.createElement("p",null,"The ",r.a.createElement("strong",null,r.a.createElement("code",null,"--enums-as-integers"))," option causes enums to be represented as ",r.a.createElement(i.a,{inline:!0,language:"avro"},'"int"')," or ",r.a.createElement(i.a,{inline:!0,language:"avro"},'"long"')," schemas instead of ",r.a.createElement(i.a,{inline:!0,language:"avro"},'"enum"')," schemas."))),r.a.createElement("p",null,t," also recognizes ",r.a.createElement(c.a,{id:"T:System.Runtime.Serialization.DataContractAttribute"},"data contract attributes"),", which can be used to customize names."),r.a.createElement("p",null,"If you need to make more complicated modifications to a generated schema, you can customize the schema creation process in code:"),r.a.createElement(i.a,{language:"csharp"},"using Chr.Avro.Abstract;\nusing Chr.Avro.Representation;\nusing System;\n\nnamespace Chr.Avro.Examples.SchemaCustomization\n{\n    public class ExampleClass\n    {\n        public int NumericProperty { get; set; }\n    }\n\n    public class Program\n    {\n        public static void Main(string[] args)\n        {\n            var builder = new SchemaBuilder();\n            var schema = builder.BuildSchema<ExampleClass>(); // a RecordSchema instance\n\n            // do modifications here\n\n            var writer = new JsonSchemaWriter();\n            Console.WriteLine(writer.Write(schema));\n        }\n    }\n}"))}},zBv9:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"latestRelease":"4.0.0","projectName":"Chr.Avro"}}}}')}}]);
//# sourceMappingURL=component---src-pages-guides-cli-create-js-d8b163f84f626db1af2f.js.map