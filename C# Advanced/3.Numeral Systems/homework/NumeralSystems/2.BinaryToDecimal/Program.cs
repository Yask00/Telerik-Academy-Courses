using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

namespace _2.BinaryToDecimal
{
    class Program
    {
        static void Main()
        {
            string input = Console.ReadLine();
            Console.WriteLine(BinaryToDecimal(input));
        }

        static BigInteger BinaryToDecimal(string binary)
        {
            BigInteger sum = 0;

            foreach (char bit in binary)
            {
                sum = (bit /*1 or 0 */ - '0') + sum * 2;

                //2 is base
                //101 chislo 
                //012 pozicii naobratno
                //sum = 1 + 0*2 = 1
                //sum = 0 + 1*2 = 2
                //sum = 1 + 2*2 = 5 //final result
            }

            return sum; //5
        }

    }
}

//alternative
//using System;
//using System.Numerics;
//
//namespace BinaryToDecimal
//{
//    class BinaryToDecimal
//    {
//        static ulong Power(int number, int power)
//        {
//            ulong result = 1;
//            for (int i = 0; i < power; i++)
//            {
//                result *= (ulong)number;
//            }
//            return result;
//        }
//
//        static BigInteger BinToDecimal(string binary)
//        {
//            BigInteger number = 0;
//            for (int i = 0; i < binary.Length; i++)
//            {
//                number += (ulong)(binary[binary.Length - i - 1] - '0') * Power(2, i);
//            }
//            return number;
//        }
//
//        static void Main()
//        {
//            string binary = Console.ReadLine();
//            BigInteger decimalRepresentation = BinToDecimal(binary);
//            Console.WriteLine(decimalRepresentation);
//        }
//    }
//}