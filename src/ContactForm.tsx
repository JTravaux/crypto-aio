import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { addToast } from '@heroui/toast';
import { Card, CardBody, Checkbox, Textarea, Select, SelectItem, RadioGroup, Radio, Button, Input } from '@heroui/react';

const ContactForm = () => {
  const formRef = useRef(null);
  const [services, setServices] = useState<string[]>([]);
  const [projectDescription, setProjectDescription] = useState('');
  const [budgetRange, setBudgetRange] = useState('');
  const [timeline, setTimeline] = useState('');
  const [contactMethod, setContactMethod] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const isFormValid =
    services.length > 0 &&
    projectDescription.trim() !== '' &&
    contactMethod.trim() !== '' &&
    contactDetails.trim() !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSubmitting(true);
    emailjs.sendForm(
      'service_3yyow77',
      'template_9zrowtg',
      formRef.current,
      'Nu_PqhT8-Euj64p_T'
    )
      .then(() => {
        addToast({
          title: 'Thank You!',
          description: 'We will review your request and get back to you as soon as possible.',
          color: 'success',
        });
        setServices([]);
        setProjectDescription('');
        setBudgetRange('');
        setTimeline('');
        setContactMethod('');
        setContactDetails('');
        if (formRef.current) (formRef.current as HTMLFormElement).reset();
      })
      .catch(() => {
        addToast({
          title: 'Error',
          description: 'Failed to send email. Please try again.',
          color: 'danger',
        });
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      {/* Service Type */}
      <div>
        <label className="block text-lg font-semibold text-gray-300 mb-4">
          Service Required *
        </label>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
          <label className="group cursor-pointer">
            <Card className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 backdrop-blur-sm border border-gray-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20 group-hover:border-cyan-500/70">
              <CardBody className="p-1 flex flex-row items-center gap-2 h-16">
                <Checkbox
                className="ml-2"
                  color="primary"
                  name="services"
                  value="content-writing"
                  checked={services.includes('content-writing')}
                  onChange={e => {
                    setServices(s => e.target.checked ? [...s, 'content-writing'] : s.filter(v => v !== 'content-writing'));
                  }}
                />
                <div className="flex-1">
                  <span className="text-gray-300 font-medium group-hover:text-cyan-400 transition-colors duration-300 text-base">Content Solutions</span>
                </div>
              </CardBody>
            </Card>
          </label>
          <label className="group cursor-pointer">
            <Card className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 backdrop-blur-sm border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 group-hover:border-purple-500/70">
              <CardBody className="p-1 flex flex-row items-center gap-2 h-16">
                <Checkbox
                className="ml-2"
                  color="secondary"
                  name="services"
                  value="smart-contracts"
                  checked={services.includes('smart-contracts')}
                  onChange={e => {
                    setServices(s => e.target.checked ? [...s, 'smart-contracts'] : s.filter(v => v !== 'smart-contracts'));
                  }}
                />
                <div className="flex-1">
                  <span className="text-gray-300 font-medium group-hover:text-purple-400 transition-colors duration-300 text-base">Development Solutions</span>
                </div>
              </CardBody>
            </Card>
          </label>
          <label className="group cursor-pointer">
            <Card className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 backdrop-blur-sm border border-gray-600/50 hover:border-green-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/20 group-hover:border-green-500/70">
              <CardBody className="p-1 flex flex-row items-center gap-2 h-16">
                <Checkbox
                className="ml-2"
                  color="success"
                  name="services"
                  value="dapp-development"
                  checked={services.includes('dapp-development')}
                  onChange={e => {
                    setServices(s => e.target.checked ? [...s, 'dapp-development'] : s.filter(v => v !== 'dapp-development'));
                  }}
                />
                <div className="flex-1">
                  <span className="text-gray-300 font-medium group-hover:text-green-400 transition-colors duration-300 text-base">Privacy Solutions</span>
                </div>
              </CardBody>
            </Card>
          </label>

        </div>
      </div>
      {/* Project Description */}
      <div>
        <label className="block text-lg font-semibold text-gray-300 mb-4">
          Project Description *
        </label>
        <Textarea
          name="project_description"
          value={projectDescription}
          onChange={e => setProjectDescription(e.target.value)}
          placeholder="Describe your project requirements, timeline, and any specific needs. Be as detailed as possible to receive an accurate quote."
          rows={5}
          className="w-full"
          classNames={{
            base: "w-full",
            input: "bg-transparent text-gray-300 text-base leading-relaxed placeholder:text-gray-500",
            inputWrapper: "bg-gray-700/50 border border-gray-600 hover:border-cyan-500 focus-within:border-cyan-500 min-h-[140px] transition-colors duration-300 shadow-none"
          }}
        />
      </div>
      {/* Budget Range */}
      <div>
        <label className="block text-lg font-semibold text-gray-300 mb-4">
          Estimated Budget Range *
        </label>
        <Select
          name="budget_range"
          selectedKeys={budgetRange ? [budgetRange] : []}
          selectionMode="single"
          onSelectionChange={keys => {
            const value = String(Array.from(keys)[0] || '');
            setBudgetRange(value);
          }}
          placeholder="Select budget range"
          className="w-full"
          classNames={{
            trigger: "bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600/50 min-h-[48px] transition-colors duration-300",
            label: "text-gray-300 font-medium",
            value: "text-gray-300",
            popoverContent: "bg-gray-800 border-gray-600",
          }}
        >
          <SelectItem key="under-2k" className="text-gray-300">Under $2,000</SelectItem>
          <SelectItem key="2k-5k" className="text-gray-300">$2,000 - $5,000</SelectItem>
          <SelectItem key="5k-15k" className="text-gray-300">$5,000 - $15,000</SelectItem>
          <SelectItem key="15k-30k" className="text-gray-300">$15,000 - $30,000</SelectItem>
          <SelectItem key="over-30k" className="text-gray-300">Over $30,000</SelectItem>
          <SelectItem key="discuss" className="text-gray-300">Prefer to discuss</SelectItem>
        </Select>
      </div>
      {/* Timeline */}
      <div>
        <label className="block text-lg font-semibold text-gray-300 mb-4">
          Project Timeline *
        </label>
        <Select
          name="timeline"
          selectedKeys={timeline ? [timeline] : []}
          selectionMode="single"
          onSelectionChange={keys => {
            const value = String(Array.from(keys)[0] || '');
            setTimeline(value);
          }}
          placeholder="Select timeline"
          className="w-full"
          classNames={{
            trigger: "bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600/50 min-h-[48px] transition-colors duration-300",
            label: "text-gray-300 font-medium",
            value: "text-gray-300",
            popoverContent: "bg-gray-800 border-gray-600",
          }}
        >
          <SelectItem key="urgent" className="text-gray-300">Urgent (1-2 weeks)</SelectItem>
          <SelectItem key="fast" className="text-gray-300">Fast (2-4 weeks)</SelectItem>
          <SelectItem key="standard" className="text-gray-300">Standard (1-2 months)</SelectItem>
          <SelectItem key="flexible" className="text-gray-300">Flexible (2+ months)</SelectItem>
        </Select>
      </div>
      {/* Anonymous Contact Method */}
      <div>
        <label className="block text-lg font-semibold text-gray-300 mb-4">
          Preferred Anonymous Contact Method *
        </label>
        <RadioGroup
          name="contact_method"
          value={contactMethod}
          onValueChange={val => setContactMethod(val)}
          className="space-y-4 mb-4"
        >
          <Radio value="telegram" className="text-gray-300">Telegram (provide username)</Radio>
          <Radio value="signal" className="text-gray-300">Signal (provide number)</Radio>
          <Radio value="protonmail" className="text-gray-300">ProtonMail (provide email)</Radio>
          <Radio value="discord" className="text-gray-300">Discord (provide username)</Radio>
        </RadioGroup>
        <Input
          name="contact_details"
          value={contactDetails}
          onChange={e => setContactDetails(e.target.value)}
          placeholder="Enter your contact details (username/email/number)"
          className="w-full"
          classNames={{
            base: "w-full",
            input: "bg-transparent text-gray-300 text-base placeholder:text-gray-500",
            inputWrapper: "bg-gray-700/50 border border-gray-600 hover:border-cyan-500 focus-within:border-cyan-500 transition-colors duration-300 shadow-none"
          }}
        />
      </div>
      {/* Privacy Notice */}
      {/* ... unchanged ... */}
      {/* Submit Button */}
      <div className="text-center">
        <Button
          type="submit"
          size="lg"
          className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
          radius="lg"
          isDisabled={!isFormValid || submitting}
          isLoading={submitting}
        >
          Submit Anonymous Quote Request
        </Button>
        <p className="text-gray-400 text-sm mt-4">
          Response within 2-4 hours • All communications encrypted
        </p>
      </div>
    </form>
  );
};

export default ContactForm; 
