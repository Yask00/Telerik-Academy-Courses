using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


    class Program
    {
        static void Main()
        {

            //var input = "4444444444451";
            string input = Console.ReadLine();

            int i = 0;

            while (0 <= i && i < input.Length)
            {
                if (input[i] == '^')
                {
                    Console.WriteLine("Jump, Jump, DJ Tomekk kommt at" + " " + i + "!");
                    return;
                }


                else if (input[i] == '0')
                {
                    Console.WriteLine("Too drunk to go on after" + " " + i + "!");
                    return;
                }

                var code = input[i] - '0'; 

                if (code % 2 == 0) 
                {

                    i += code;
                }


                else if (code % 2 == 1)
                {

                    i -= code;
                }
            }
            //--------------------------------------------------------------------
            if (i < 0 || input.Length <= i)
            {
                Console.WriteLine("Fell off the dancefloor at" + " " + i + "!");
            }

           
                

            
        }
    }
