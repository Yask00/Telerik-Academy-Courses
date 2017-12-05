using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace izpit
{
    class Program
    {
        static void Main()
        {

            int input = int.Parse(Console.ReadLine());

            int firstNumber = ((input - (input % 10)) / 100);
            int secondNumber = (input / 10) % 10;
            int lastNumber = input % 10;

            double firstNum = firstNumber;
            double secondNum = secondNumber;
            double thirdNum = lastNumber;



            if (thirdNum == 0)
            {
                double result = firstNum * secondNum;
                Console.WriteLine("{0:F2}", result);
            }
            else if (thirdNum >= 1 && thirdNum <= 5)
            {
                double result = (firstNum * secondNum) / thirdNum;
                Console.WriteLine("{0:F2}", result);
            }
            else if (thirdNum > 5)
            {
                double result = (firstNum + secondNum) * thirdNum;
                Console.WriteLine("{0:F2}", result);
            }
        }
    }
}

//Author solution

    //using System;
    //
    //    namespace ConsoleApplication1
    //    {
    //        public class Solution
    //        {
    //            public static void Main(string[] args)
    //            {
    //                int number = int.Parse(Console.ReadLine());
    //
    //                float digit1 = number / 100 % 10;
    //                float digit2 = number / 10 % 10;
    //                float digit3 = number / 1 % 10;
    //
    //                float result;
    //
    //                if (digit3 == 0)
    //                {
    //                    result = digit1 * digit2;
    //                }
    //                else if (0 < digit3 && digit3 <= 5)
    //                {
    //                    result = (digit1 * digit2) / digit3;
    //                }
    //                else
    //                {
    //                    result = (digit1 + digit2) * digit3;
    //                }
    //
    //                Console.WriteLine("{0:F2}", result);
    //            }
    //        }
    //    }