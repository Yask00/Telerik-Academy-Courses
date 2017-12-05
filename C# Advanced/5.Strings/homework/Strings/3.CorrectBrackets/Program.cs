using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3.CorrectBrackets
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            CheckBrackets(input);
        }

        static void CheckBrackets(string expression)
        {
            
            int leftBracketsCount = 0;
            int rightBracketsCount = 0;

            for (int i = 0; i < expression.Length; i++)
            {
                if (expression[i] == '(')
                {
                    leftBracketsCount++;
                }
                else if (expression[i] == ')')
                {
                    rightBracketsCount++;
                } 
            }

            if (leftBracketsCount == rightBracketsCount)
            {
                Console.WriteLine("Correct");
            }
            else
            {
                Console.WriteLine("Incorrect");
            }
  
        }
    }
}

// Old solution without Method
//using System;
//
//    class CorrectBrackets
//{
//    static void Main()
//    {
//        string toCheck = Console.ReadLine();
//
//        string win = "Correct";
//        string notwin = "Incorrect";
//
//        int left = 0;
//        int right = 0;
//
//        foreach (char element in toCheck)
//        {
//            if (element == '(')
//            {
//                left++;
//
//                continue;
//            }
//
//            if (element == ')')
//            {
//                right++;
//
//                continue;
//            }
//        }
//
//
//        if (left == right)
//        {
//            Console.WriteLine(win);
//        }
//        else
//        {
//            Console.WriteLine(notwin);
//        }
//    }
//}
