using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1.Calculation_Problem
{
    class Program
    {
        static void Main()
        {
            var catNumbers = Console.ReadLine().Split(' ').Select(MeowToDecimal).ToArray();
            var sum = 0;
            foreach (var n in catNumbers)
            {
                sum += n;
            }

            var answer = DecimalToMeow(sum) + " = " + sum;
            Console.WriteLine(answer);
        }

        static string DecimalToMeow(int dec)
        {
            var result = string.Empty;

            do
            {
                char digit = (char)((dec % 23) + 'a');
                result = digit + result;
                dec /= 23;
            }
            while (dec > 0);

            return result;
        }

        static int MeowToDecimal(string meow)
        {

            int result = 0;
            foreach (char digit in meow)
            {
                result = (digit - 'a') + result * 23;
            }
            return result;

        }
    }
}
