using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1.DeCatCoding
{
    class Program
    {
        static void Main()
        {
            var catNumbers = Console.ReadLine().Split(' ').Select(MeowToDecimal).Select(DecimalTo26).ToArray();
            Console.WriteLine(string.Join(" ", catNumbers));
        }

        static string DecimalTo26 (ulong dec) // 114674 -------> gnqo gnqo gnqo
        {
            var result = string.Empty;

            do
            {
                char digit = (char)((dec % 26) + 'a');
                result = digit + result;
                dec /= 26;
            }
            while (dec > 0);

            return result;
        }

        static ulong MeowToDecimal (string meow) // miau miau miau --------> 114674
        {
            ulong result = 0;
            foreach (char digit in meow)
            {
                result = (ulong)(digit - 'a') + result * 21;   
            }
            return result;
        }
    }
}
