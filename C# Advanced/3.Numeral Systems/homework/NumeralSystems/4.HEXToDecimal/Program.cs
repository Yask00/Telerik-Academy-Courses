using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

namespace _4.HEXToDecimal
{
    class Program
    {
        static ulong Power(int number, int power)
        {
            ulong result = 1;
            for (int i = 0; i < power; i++)
            {
                result *= (ulong)number;
            }
            return result;
        }

        static BigInteger HexToDecimal(string hex)
        {
            BigInteger number = 0;
            ulong hexValue = 0;
            for (int i = 0; i < hex.Length; i++)
            {
                switch (hex[hex.Length - i - 1])
                {
                    case '0': hexValue = 0; break;
                    case '1': hexValue = 1; break;
                    case '2': hexValue = 2; break;
                    case '3': hexValue = 3; break;
                    case '4': hexValue = 4; break;
                    case '5': hexValue = 5; break;
                    case '6': hexValue = 6; break;
                    case '7': hexValue = 7; break;
                    case '8': hexValue = 8; break;
                    case '9': hexValue = 9; break;
                    case 'A': hexValue = 10; break;
                    case 'B': hexValue = 11; break;
                    case 'C': hexValue = 12; break;
                    case 'D': hexValue = 13; break;
                    case 'E': hexValue = 14; break;
                    case 'F': hexValue = 15; break;
                }
                number += hexValue * Power(16, i);
            }
            return number;
        }

        static void Main()
        {
            string hex = Console.ReadLine();
            BigInteger decimalRepresentation = HexToDecimal(hex);
            Console.WriteLine(decimalRepresentation);
        }
    }
}
