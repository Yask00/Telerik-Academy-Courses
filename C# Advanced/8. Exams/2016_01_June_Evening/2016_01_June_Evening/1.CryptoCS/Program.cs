using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;

namespace _1.CryptoCS
{
    class Program
    {
        static void Main()
        {
            var firstNumber = Console.ReadLine();
            var PlusMinus = Console.ReadLine();
            var secondNUmber = Console.ReadLine();
            

            BigInteger first = TwentySixToDecimal(firstNumber);
            BigInteger second = SeventhToDecimal(secondNUmber);

            BigInteger resultPlus = (first + second);
            BigInteger resultMinus = (first - second);

            if (PlusMinus == "+")
            {
                Console.WriteLine(DecimalToNine(resultPlus));
            }
            else
            {
                Console.WriteLine(DecimalToNine(resultMinus));
            }
        }

        static BigInteger TwentySixToDecimal(string text)
        {
            BigInteger result = 0;

            foreach (char digit in text)
            {
                result = (digit - 'a') + result * 26;
            }
            return result;
        }

        static BigInteger SeventhToDecimal(string num)
        {
            BigInteger result = 0;

            foreach (char digit in num)
            {
                result = (digit - '0') + result * 7;
            }
            return result;
        }

        static string DecimalToNine(BigInteger number)
        {
            var result = string.Empty;

            do
            {
                char digit = (char)((number % 9) + '0');
                result = digit + result;
                number /= 9;
            }
            while (number > 0);

            return result;
        }
    }
}
