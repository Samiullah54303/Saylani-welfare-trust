import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, Banknote, Smartphone } from 'lucide-react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

const DonationModal: React.FC<DonationModalProps> = ({ 
  isOpen, 
  onClose, 
  initialCategory = 'general' 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    category: initialCategory,
    paymentMethod: 'card',
    message: ''
  });
  
  const { toast } = useToast();

  const donationCategories = [
    { id: 'qurbani', label: 'Qurbani Support', suggested: '15000' },
    { id: 'food', label: 'Daily Food', suggested: '5000' },
    { id: 'medical', label: 'Medical Treatment', suggested: '10000' },
    { id: 'kifalat', label: 'Family Kifalat', suggested: '8000' },
    { id: 'education', label: 'Education Support', suggested: '6000' },
    { id: 'general', label: 'Quick Donate', suggested: '2000' },
    { id: 'hospital', label: 'Children Hospital', suggested: '20000' },
    { id: 'water', label: 'Clean Water', suggested: '7000' }
  ];

  const paymentMethods = [
    { id: 'card', label: 'Credit/Debit Card', icon: CreditCard },
    { id: 'bank', label: 'Bank Transfer', icon: Banknote },
    { id: 'mobile', label: 'Mobile Banking', icon: Smartphone }
  ];

  const suggestedAmounts = ['1000', '5000', '10000', '25000', '50000'];

  useEffect(() => {
    setFormData(prev => ({ ...prev, category: initialCategory }));
  }, [initialCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.amount) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate donation processing
    toast({
      title: "Donation Successful!",
      description: `Thank you ${formData.name} for your generous donation of PKR ${formData.amount}. May Allah reward you abundantly.`,
    });

    // Reset form and close modal
    setFormData({
      name: '', email: '', phone: '', amount: '', 
      category: 'general', paymentMethod: 'card', message: ''
    });
    onClose();
  };

  const selectedCategory = donationCategories.find(cat => cat.id === formData.category);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">♥</span>
            </div>
            Make a Donation - Saylani Welfare
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Donation Category */}
          <div className="space-y-2">
            <Label className="text-lg font-semibold">Donation Category</Label>
            <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {donationCategories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Suggested Amount */}
          <div className="space-y-3">
            <Label className="text-lg font-semibold">
              Donation Amount (PKR)
              {selectedCategory && (
                <span className="text-sm text-muted-foreground ml-2">
                  Suggested: PKR {selectedCategory.suggested}
                </span>
              )}
            </Label>
            
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-3">
              {suggestedAmounts.map((amount) => (
                <Button
                  key={amount}
                  type="button"
                  variant="outline"
                  className="h-12"
                  onClick={() => setFormData({...formData, amount})}
                >
                  {amount}
                </Button>
              ))}
            </div>
            
            <Input
              placeholder="Enter custom amount"
              value={formData.amount}
              onChange={(e) => setFormData({...formData, amount: e.target.value})}
              type="number"
              min="100"
              className="text-lg"
              required
            />
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Full Name *</Label>
              <Input
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label>Phone Number</Label>
              <Input
                placeholder="Enter your phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                type="tel"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Email Address</Label>
            <Input
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              type="email"
            />
          </div>

          {/* Payment Method */}
          <div className="space-y-3">
            <Label className="text-lg font-semibold">Payment Method</Label>
            <RadioGroup 
              value={formData.paymentMethod} 
              onValueChange={(value) => setFormData({...formData, paymentMethod: value})}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <div key={method.id} className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value={method.id} id={method.id} />
                    <Label htmlFor={method.id} className="flex items-center gap-2 cursor-pointer">
                      <Icon className="w-5 h-5" />
                      {method.label}
                    </Label>
                  </div>
                );
              })}
            </RadioGroup>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label>Message (Optional)</Label>
            <textarea
              placeholder="Any special message or dedication..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full p-3 border rounded-lg resize-none h-20"
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="btn-donate flex-1">
              Donate PKR {formData.amount || '0'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;