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

            int count = int.Parse(Console.ReadLine());//4;

            int[] myArray = new int[count];

            for (int i = 0; i < count; i++)
            {
                int number = int.Parse(Console.ReadLine());
                myArray[i] = number;
            }

            //first Line
            for (int i = 0; i < count - 1; i++)
            {
                int mix = ((myArray[i + 1] / 10) * (myArray[i] % 10));
                Console.Write(mix + " ");
            }
            Console.WriteLine();

            //second Line
            for (int i = 0; i < count - 1; i++)
            {
                int diff = myArray[i + 1] - myArray[i];

                if (diff < 0)
                {
                    diff = diff * -1;
                    Console.Write(diff + " ");

                }
                else
                {
                    Console.Write(diff + " ");
                }

            }
        }
    }
}

//Author Solution

//using System;
//
//    class StartUp
//    {
//        static void Main()
//        {
//            int n = int.Parse(Console.ReadLine());
//
//            int[] numbers = new int[n];
//
//            for (int i = 0; i < n; ++i)
//            {
//                numbers[i] = int.Parse(Console.ReadLine());
//            }
//
//            int[] mixed = new int[n - 1];
//            int[] subtracted = new int[n - 1];
//
//            for (int i = 1; i < n; ++i)
//            {
//                mixed[i - 1] = numbers[i - 1] % 10 * (numbers[i] / 10);
//                subtracted[i - 1] = numbers[i - 1] - numbers[i];
//                if (subtracted[i - 1] < 0) subtracted[i - 1] *= -1;
//            }
//
//            Console.WriteLine(string.Join(" ", mixed));
//            Console.WriteLine(string.Join(" ", subtracted));
//        }
//    }