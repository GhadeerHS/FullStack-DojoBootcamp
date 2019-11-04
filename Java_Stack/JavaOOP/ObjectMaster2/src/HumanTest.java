public class HumanTest {

	public static void main(String[] args) {

		Human ghadeer = new Human();
		Human ashwaq = new Human();
		
		ghadeer.attack(ashwaq);
		ghadeer.attack(ashwaq);
		ghadeer.attack(ashwaq);
		ghadeer.attack(ashwaq);
		ghadeer.attack(ashwaq);
		ghadeer.attack(ashwaq);
	
		
		
		Wizard A = new Wizard();
		Samurai B = new Samurai();
		Samurai C = new Samurai();
		Ninja D = new Ninja();
		
		A.fireball(B);
		A.heal(C);
		B.deathBlow(C);
		B.meditate();
		D.steal(C);
		D.runAway(A);
	}

}