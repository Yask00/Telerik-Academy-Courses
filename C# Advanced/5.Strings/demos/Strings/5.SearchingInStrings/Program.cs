using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _5.SearchingInStrings
{
    class Program
    {
        static void Main(string[] args)
        {
            string str = "C# Programming Course";

            int index = str.IndexOf("C#"); // index = 0
            Console.WriteLine(index);

            index = str.IndexOf("Course"); // index = 15
            Console.WriteLine(index);

            // IndexOf is case-sensetive. -1 means not found
            index = str.IndexOf("COURSE"); // index = -1
            Console.WriteLine(index);

            // Case-insensitive IndexOf
            index = str.ToLower().IndexOf("COURSE".ToLower()); // 18

            index = str.IndexOf("ram"); // index = 7
            Console.WriteLine(index);

            index = str.IndexOf("r"); // index = 4
            Console.WriteLine(index);

            index = str.IndexOf("r", 5); // index = 7
            Console.WriteLine(index);

            index = str.IndexOf("r", 8); // index = 18
            Console.WriteLine(index);
        }
    }
}
