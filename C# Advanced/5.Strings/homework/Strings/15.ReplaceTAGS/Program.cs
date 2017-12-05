using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace _15.ReplaceTAGS
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            Regex r = new Regex(@"(<\s*a\s*href\s*=)\s*""(.*?)""\s*>(.*?)<\s*/\s*a\s*>");
            string result = r.Replace(input, m => "[" + m.Groups[3] + "](" + m.Groups[2] + ")");

            Console.WriteLine(result);
        }
    }
}
