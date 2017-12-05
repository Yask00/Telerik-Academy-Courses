using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;

namespace _1.StrangeLand_Numbers
{
    class Program
    {
        static void Main()
        {

            string strangeNumber = Console.ReadLine()//start with small letter
                .Replace("f", "0")
                .Replace("bIN", "1")
                .Replace("oBJEC", "2")
                .Replace("mNTRAVL", "3")
                .Replace("lPVKNQ", "4")
                .Replace("pNWE", "5")
                .Replace("hT", "6")
                ;

            //From 7th to decimal

            int power = 0;

            BigInteger result = 0;

            for (int i = strangeNumber.Length - 1; i >= 0; i--)
            {
                BigInteger currentNumber = strangeNumber[i] - '0';
                result += currentNumber * Power(7, power);

                power++;
            }
            Console.WriteLine(result);
        }

        static BigInteger Power(int number, int power)
        {
            BigInteger result = 1;
            for (BigInteger i = 0; i < power; i++)
            {
                result *= number;
            }
            return result;
        }
    }
}
