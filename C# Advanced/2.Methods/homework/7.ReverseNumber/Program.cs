using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _7.ReverseNumber
{
    class Program
    {
        static void Main()
        {
            decimal input = decimal.Parse(Console.ReadLine());
            Console.WriteLine(Reverse(input));
        }

        static decimal Reverse(decimal number)
        {
            return decimal.Parse(number.ToString().Reverse().Aggregate("", (s, c) => s + c));
        }
    }
}

//original solution
//using System;
//
//
//    class Reverse_number
//        {
//            static void Main()
//            {
//                decimal N = decimal.Parse(Console.ReadLine());
//                Console.WriteLine(Reverse(N));
//            }
//
//            static decimal Reverse(decimal number)
//            {
//
//                decimal ReversedNumber = 0;
//                string ReverseNumberString = "";
//                string NumberString = number.ToString();
//
//                for (int i = NumberString.Length - 1; i >= 0; i--)
//                {
//                    ReverseNumberString += NumberString[i].ToString();
//                }
//                ReversedNumber = decimal.Parse(ReverseNumberString);
//                return ReversedNumber;
//
//            }
//        }
