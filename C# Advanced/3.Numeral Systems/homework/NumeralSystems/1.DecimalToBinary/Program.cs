using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

namespace _1.DecimalToBinary
{
    class Program
    {
        static void Main()
        {
            BigInteger input = BigInteger.Parse(Console.ReadLine());
            Console.WriteLine(DecimalToBinary(input));
        }

        static string DecimalToBinary(BigInteger decValue)
        {
            string binary = "";
            //null exception
            if (decValue == 0)
            {
                return "0";
            }
            while (decValue != 0)
            {
                BigInteger bit = decValue % 2; // 1 or 0
                binary = bit + binary; //add bit upfront
                decValue /= 2; // cut the number
            }
            //19 9 4 2 1
            // 1 1 0 0 1 --> 1 0011
            return binary;
        }
    }
}
