using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace _12.ParseNumbersAndDates
{
    class Program
    {
        static void Main()
        {
            string numStr = "3.14";
            Thread.CurrentThread.CurrentCulture =
                CultureInfo.InvariantCulture;
            float f = float.Parse(numStr);
            Console.WriteLine(f); // 3.14

            numStr = "3,14";
            f = float.Parse(numStr);
            Console.WriteLine(f); // 314 -> due to invariant culture

            f = float.Parse(numStr, new CultureInfo("bg-BG"));
            Console.WriteLine(f); // 3.14

            string dateStr = "25.07.2011";
            DateTime date = DateTime.ParseExact(
                dateStr, "dd.MM.yyyy", CultureInfo.InvariantCulture);
            Console.WriteLine(date);
        }
    }
}
