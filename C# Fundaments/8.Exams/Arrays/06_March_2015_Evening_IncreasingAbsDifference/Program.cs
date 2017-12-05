using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Problem_2___Increasing_Absolute_Differences
{
    class Program
    {
        static void Main(string[] args)
        {
            //1. Read Input
            //2. for every sequence do the following
            //    2.1 calculate sequence of abs differences
            //    2.2 check if abs differences sequence is increasing
            //    2.3 output the result of current sequence


            var T = int.Parse(Console.ReadLine());

            for (int i = 0; i < T; i++)

            {
                var sequence = Console.ReadLine().Split(' ').Select(long.Parse).ToArray();

                long last = sequence[0];//1st number in sequnce

                bool isIncreasing = true;

                for (int j = 2; j < sequence.Length; j++)
                {
                    var lastAbsDiff = Math.Abs(sequence[j - 2] - sequence[j - 1]);//differece
                    var currentAbsDiff = Math.Abs(sequence[j - 1] - sequence[j]);

                    if (lastAbsDiff > currentAbsDiff || (currentAbsDiff - lastAbsDiff) > 1)
                    {
                        isIncreasing = false;
                        break;
                    }

                }
                Console.WriteLine(isIncreasing);
            }


        }
    }
}
