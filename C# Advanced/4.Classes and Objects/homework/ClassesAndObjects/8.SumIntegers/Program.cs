using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _8.SumIntegers
{
    class Program
    {
        static void Main()
        {
         
        
            string input = Console.ReadLine();
            string[] inputArray = input.Split(' ');
        
            int[] myInts = Array.ConvertAll(inputArray, s => int.Parse(s));
            int result = 0;
        
            for (int i = 0; i < myInts.Length; i++)
            {
                result += myInts[i];
            }
        
            Console.WriteLine(result);
        
        }

        //Old Solution
        //public static void Main(string[] args)
        //{
        //    var numbers = ReadInput(Console.ReadLine());
        //    var sum = CalculateSum(numbers);
        //    Console.WriteLine(sum);
        //}
        //
        //private static int CalculateSum(int[] numbers)
        //{
        //    int sum = 0;
        //    for (int i = 0; i < numbers.Length; i++)
        //    {
        //        sum += numbers[i];
        //    }
        //
        //    return sum;
        //}
        //
        //private static int[] ReadInput(string input)
        //{
        //    int[] integers = input.Split(' ').Select(int.Parse).ToArray();
        //    return integers;
        //}

    }
}
