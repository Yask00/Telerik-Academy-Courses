using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

namespace _3.DecimalToHEX
{
    class Program
    {
        static string DecimalToHex(BigInteger number)
        {
            string hex = "";
            char[] hexChars = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F' };
            if (number == 0)
            {
                return "0";
            }
            while (number > 0)
            {
                char symbolToAdd = hexChars[(int)(number % 16)];
                hex = symbolToAdd.ToString() + hex;
                number /= 16;
            }
            return hex;
        }

        static void Main()
        {
            BigInteger number = BigInteger.Parse(Console.ReadLine());
            string hexadecimalRepresentation = DecimalToHex(number);
            Console.WriteLine(hexadecimalRepresentation);
        }
    }
}
