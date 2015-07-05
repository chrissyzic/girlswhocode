from Myro import *
init("simulator")

def shimmy(a):
    for i in range(5):
        motors(a,-a,.5)
        motors(-a,a,.5)

shimmy(1)
