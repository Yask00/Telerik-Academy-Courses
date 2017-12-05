using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2.Busses
{
    class Program
    {
        static void Main()
        {

            int count = int.Parse(Console.ReadLine());


            int firstSpeed = 0;
            int currentSpeed = 0;

            int bestSpeed;

            int numberOfGroups = 0;

            bool isFalse = false;

            for (int i = 0; i < count; i++)
            {
                int speed = int.Parse(Console.ReadLine());

                if (!isFalse)
                {
                    isFalse = true;
                    firstSpeed = speed;
                    numberOfGroups += 1;
                }

                else if (speed > firstSpeed)
                {
                    numberOfGroups += 0;
                }
                

                else if (speed == firstSpeed)
                {
                    firstSpeed = speed;
                    numberOfGroups += 1;
                }

                else
                {
                    firstSpeed = speed;
                    numberOfGroups += 1;
                }

            }
            Console.WriteLine(numberOfGroups);
        }
    }
}
