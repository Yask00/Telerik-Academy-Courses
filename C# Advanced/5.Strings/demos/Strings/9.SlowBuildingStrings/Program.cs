using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _9.SlowBuildingStrings
{
    class Program
    {
        static void Main()
        {
            DateTime startTime = DateTime.Now;
            Console.WriteLine("Concatenation 50 000 chars...");
            DupChar('a', 50000);
            DateTime endTime = DateTime.Now;
            Console.WriteLine("... done in {0} seconds", endTime - startTime);

            startTime = DateTime.Now;
            Console.WriteLine("Concatenation 200 000 chars...");
            DupChar('a', 200000);
            endTime = DateTime.Now;
            Console.WriteLine("... done in {0} seconds", endTime - startTime);
        }

        public static string DupChar(char ch, int count)
        {
            string result = "";
            for (int i = 0; i < count; i++)
            {
                result += ch;
            }
            return result;
        }
    }
}
