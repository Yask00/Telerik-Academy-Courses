using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3.EnglishDigit
{
    class Program
    {
        static void Main()
        {
            int number = int.Parse(Console.ReadLine());
            LastDigitAsWord(number);
        }

        static void LastDigitAsWord(int integer)
        {
            switch (integer % 10)
            {
                case 0: Console.WriteLine("zero");break;
                case 1: Console.WriteLine("one"); break;
                case 2: Console.WriteLine("two"); break;
                case 3: Console.WriteLine("three"); break;
                case 4: Console.WriteLine("four"); break;
                case 5: Console.WriteLine("five"); break;
                case 6: Console.WriteLine("six"); break;
                case 7: Console.WriteLine("seven"); break;
                case 8: Console.WriteLine("eight"); break;
                case 9: Console.WriteLine("nine"); break;
                default: Console.WriteLine("NO"); break;     
            }
        }

    }
}

//previous solution
//using System;
//    class English_digit
//        {
//            static void Main()
//            {
//                int n = int.Parse(Console.ReadLine());
//                string result = LastDigitEnglish(n);
//                Console.WriteLine(result);
//
//            }
//
//            static string LastDigitEnglish(int number)
//            {
//                string[] Word = { "zero", "one", "two", "three",
//                                  "four", "five", "six", "seven", "eight", "nine", };
//                int lastDigit = number % 10;
//                return Word[lastDigit];
//            }
//        }